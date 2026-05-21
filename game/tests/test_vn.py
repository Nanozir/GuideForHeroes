import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        errors = []
        page.on("pageerror", lambda exc: errors.append(f"PAGE ERROR: {exc}"))
        page.on("console", lambda msg: msg.type == "error" and errors.append(f"CONSOLE ERROR: {msg.text}"))

        await page.goto("http://localhost:8080/index.html")
        await page.wait_for_load_state("networkidle")

        title = await page.text_content("h1.game-title")
        print("Title:", title)

        all_loaded = await page.evaluate("""() => ({
            scenes: Object.keys(window.SCENES || {}).length,
            characters: Object.keys(window.CHARACTERS || {}).length,
            locations: Object.keys(window.LOCATIONS || {}).length,
            endings: Object.keys(window.ENDINGS || {}).length,
            engineReady: !!window.Engine,
            uiReady: !!window.UI,
            saveReady: !!window.SaveSystem,
            audioReady: !!window.Audio,
        })""")
        print("Globals:", all_loaded)

        await page.click("[data-action='new-game']")
        await page.wait_for_timeout(500)

        is_game = await page.is_visible("#game-screen.active")
        print("Game screen active:", is_game)

        await page.wait_for_timeout(800)
        text = await page.text_content("#dialogue-text")
        print("First text length:", len(text or ""))

        for i in range(140):
            choice_visible = await page.is_visible(".choice-menu:not(.hidden)")
            if choice_visible:
                buttons = await page.query_selector_all(".choice-btn")
                if buttons:
                    txt = await buttons[0].text_content()
                    print(f"  step {i}: choice -> {(txt or '')[:60]}")
                    await buttons[0].click()
                    await page.wait_for_timeout(150)
                    continue

            ending_visible = await page.is_visible("#ending-modal:not(.hidden)")
            if ending_visible:
                ending_title = await page.text_content("#ending-title")
                print(f"  ENDING reached: {ending_title}")
                break

            await page.click("#dialogue-box")
            await page.wait_for_timeout(60)

        scene = await page.evaluate("Engine.getState().currentScene")
        flags = await page.evaluate("Engine.getState().flags")
        print(f"\nFinal scene: {scene}")
        print(f"Final flags: {flags}")

        if errors:
            print("\n!! ERRORS:")
            for e in errors:
                print(" -", e)
            return 1
        else:
            print("\nNo runtime errors. Game loads and runs.")
            return 0

        await browser.close()

import sys
sys.exit(asyncio.run(run()))
