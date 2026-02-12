import * as vscode from "vscode";

export async function stringifyCopy() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}

  const selection = editor.selection;
  const text = editor.document.getText(selection);

  if (!text) {
    vscode.window.showWarningMessage("Nenhum texto selecionado.");
    return;
  }

  const stringified = JSON.stringify(text);

  await vscode.env.clipboard.writeText(stringified);
  vscode.window.showInformationMessage("Texto stringificado copiado.");
}
