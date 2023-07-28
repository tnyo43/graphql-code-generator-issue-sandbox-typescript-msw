import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations"] },
    "mocks.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-msw"],
      presetConfig: {
        typesPath: "./types",
      },
    },
  },
};

export default config;
