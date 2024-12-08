import ImportantNews from "@/components/News/ImportantNews";
import LastNews from "@/components/News/LastNews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


const SideBar = () => {
  return (
    <Tabs
      defaultValue="last"
      defaultChecked
      className="w-[400px] border-2 rounded-lg bg-white"
    >
      <TabsList>
        <TabsTrigger value="last" className="font-semibold">
          সর্বশেষ
        </TabsTrigger>
        <TabsTrigger value="important" className="font-semibold">
          গুরুত্বপূর্ণ
        </TabsTrigger>
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
