"use client"

import { useEffect, useState } from "react"

import supabase from "@/config/supabase"
import { CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { TalentList } from "./components/table"
import { columns } from "./components/table/columns"

export default function IndexPage() {
  const [selectedSkill, setSelectedSkill] = useState("designer")
  const [data, setData] = useState<any>([])
  const fetchData = async () => {
    let { data: talents } = await supabase
      .from("talents")
      .select("*")
      .range(0, 9)
    setData(talents)
  }
  useEffect(() => {
    fetchData()
  }, [selectedSkill])

  return (
    <>
      <div className="my-8">
        <CardTitle>Codenight Talents</CardTitle>
      </div>
      <div className="mt-4">
        <Tabs
          defaultValue={selectedSkill}
          onValueChange={(skill) => setSelectedSkill(skill)}
        >
          <TabsList className="grid w-[1000px] grid-cols-6 gap-2">
            <TabsTrigger value="designer">Website Designer</TabsTrigger>
            <TabsTrigger value="website">Website Developer</TabsTrigger>
            <TabsTrigger value="backend">Backend Developer</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="full_stack_developers">Full Stack</TabsTrigger>
            <TabsTrigger value="writers">Content Writers</TabsTrigger>
          </TabsList>
          <TabsContent value="designer">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="website">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="backend">
            <TalentList data={data} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
