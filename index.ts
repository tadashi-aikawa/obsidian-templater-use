import { App, Editor, Vault } from "obsidian";

type UVault = Vault & {
  config: {
    spellcheckDictionary?: string[];
    useMarkdownLinks?: false;
    newLinkFormat?: "shortest" | "relative" | "absolute";
  };
};

type UApp = App & {
  isMobile: boolean;
  vault: UVault;
};

declare let app: UApp;

const getActiveEditor = (): Editor | null =>
  app.workspace.activeEditor?.editor ?? null;

/**
 * Insert text at the cursor position
 */
async function insert(text: string): Promise<void> {
  const editor = getActiveEditor();
  if (!editor) {
    return;
  }

  editor.replaceRange(text, editor.getCursor());
}

export default () => ({
  insert,
});
