import {parser} from "@/utils/arg_parse"

it("shuold parse", () => {
  const p = parser().parseArgs(["--name", "ok"])
  expect(p.name).toBe("ok")
})
