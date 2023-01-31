import { List } from "./components/List";

interface Props {}

export function App({}: Props) {
  return (
    <List initialItems={["Thalis", "Vitória", "Yuri"]}/>
  )
};
