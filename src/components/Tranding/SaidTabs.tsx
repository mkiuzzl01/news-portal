import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Opinion from "../News/Opinion";
import MeetUp from "../News/MeetUp";

const SaidTabs = () => {
  return (
    <Tabs defaultValue="meetUp" defaultChecked className="bg-white">
      <TabsList>
        <TabsTrigger value="meetUp" className="font-semibold">
          সাক্ষাৎকার
        </TabsTrigger>
        <TabsTrigger value="opinion" className="font-semibold">
          মতামত
        </TabsTrigger>
      </TabsList>
      <TabsContent value="meetUp">
        <MeetUp />
      </TabsContent>
      <TabsContent value="opinion">
        <Opinion />
      </TabsContent>
    </Tabs>
  );
};

export default SaidTabs;
