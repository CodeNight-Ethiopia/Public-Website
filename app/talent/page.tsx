"use client"

import { useEffect, useState } from "react"

import { CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { GetTalentPaginated } from "./actions"
import { TalentList } from "./components/table"
import { columns } from "./components/table/columns"

export default function IndexPage() {
  const [selectedSkill, setSelectedSkill] = useState("designer")
  const [page, setPage] = useState(1)
  const [data, setData] = useState<any>([])
  const fetchData = async () => {
    let {
      data: talents,
      page: pa,
      limit,
      total,
    } = await GetTalentPaginated(selectedSkill, {
      page,
      limit: 10,
    })
    setData(talents)
    setPage(pa)
  }
  useEffect(() => {
    fetchData()
  }, [selectedSkill, page])

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
            <TalentList data={data} page={page} columns={columns} />
          </TabsContent>
          <TabsContent value="website">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="backend">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="devops">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="full_stack_developers">
            <TalentList data={data} columns={columns} />
          </TabsContent>
          <TabsContent value="writers">
            <TalentList data={data} columns={columns} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
