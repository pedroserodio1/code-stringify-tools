import * as vscode from "vscode";

export async function destringifyCopy() {
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

    await vscode.env.clipboard.writeText(parsed);
    vscode.window.showInformationMessage("Texto desstringificado copiado.");
  } catch {
    vscode.window.showErrorMessage("Seleção não é uma string JSON válida.");
  }
}
