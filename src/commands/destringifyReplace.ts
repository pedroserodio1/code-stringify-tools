import * as vscode from "vscode";

export async function destringifyReplace() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}

  const selection = editor.selection;
  const text = editor.document.getText(selection);

  if (!text) {
    vscode.window.showWarningMessage("Nenhum texto selecionado.");
    return;
  }

  try {
    const parsed = JSON.parse(text);

    await editor.edit(editBuilder => {
      editBuilder.replace(selection, parsed);
    });
  } catch {
    vscode.window.showErrorMessage("Seleção não é uma string JSON válida.");
  }
}
