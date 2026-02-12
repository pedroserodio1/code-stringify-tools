import * as vscode from "vscode";
import { stringifyReplace } from "./commands/stringifyReplace";
import { stringifyCopy } from "./commands/stringifyCopy";
import { destringifyReplace } from "./commands/destringifyReplace";
import { destringifyCopy } from "./commands/destringifyCopy";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("codeStringify.stringifyReplace", stringifyReplace),
    vscode.commands.registerCommand("codeStringify.stringifyCopy", stringifyCopy),
    vscode.commands.registerCommand("codeStringify.destringifyReplace", destringifyReplace),
    vscode.commands.registerCommand("codeStringify.destringifyCopy", destringifyCopy)
  );
}

export function deactivate() {}
