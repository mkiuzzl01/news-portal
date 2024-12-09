import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LastNews from "../News/LastNews";
import ImportantNews from "../News/ImportantNews";

const SaidTabs = () => {
  return (
    <Tabs defaultValue="last" defaultChecked className="bg-white">
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
        <ImportantNews  />
      </TabsContent>
    </Tabs>
  );
};

export default SaidTabs;
