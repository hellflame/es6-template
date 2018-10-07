import {ArgumentParser} from "argparse"
import {version, description} from "@/utils/meta"

export const parser = () =>{
  const _parser = ArgumentParser({
    version,
    description,
    addHelp: true
  })
  _parser.addArgument([
    "--name", "-n"
  ], {
    help: "你的名字"
  })
  return _parser
}
