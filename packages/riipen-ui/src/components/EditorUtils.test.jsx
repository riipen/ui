import EditorUtils from "./EditorUtils";

describe("<EditorUtils>", () => {
  describe("fromHtml", () => {
    it("removes tags", () => {
      const result = EditorUtils.fromHtml("<p>test</p>").getPlainText();
      expect(result).toEqual(`test`);
    });

    it("decodes html codes", () => {
      const result = EditorUtils.fromHtml("test &amp; &#39;").getPlainText();
      expect(result).toEqual(`test & '`);
    });

    it("returns empty string with undefined value", () => {
      const result = EditorUtils.fromHtml().getPlainText();

      expect(result).toEqual("");
    });
  });
});
