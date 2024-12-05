import ImportantNews from "@/components/News/ImportantNews";
import LastNews from "@/components/News/LastNews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SideBar = () => {
  return (
    <Tabs
      defaultValue="last"
      defaultChecked
      className="w-[400px] border-2 rounded-lg"
    >
      <TabsList>
        <TabsTrigger value="last">সর্বশেষ</TabsTrigger>
        <TabsTrigger value="important">গুরুত্বপূর্ণ</TabsTrigger>
      </TabsList>
      <TabsContent value="last">
        {/* this is last news  */}
        <LastNews />
      </TabsContent>
      <TabsContent value="important">
        {/* this is important news */}
        <ImportantNews />
      </TabsContent>
    </Tabs>
  );
};

export default SideBar;
