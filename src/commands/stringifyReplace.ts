import * as vscode from "vscode";

export async function stringifyReplace() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}

  const selection = editor.selection;
  const text = editor.document.getText(selection);

  if (!text) {
    vscode.window.showWarningMessage("Nenhum texto selecionado.");
    return;
  }

  const stringified = JSON.stringify(text);

  await editor.edit(editBuilder => {
    editBuilder.replace(selection, stringified);
  });
}
