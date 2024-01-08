import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"

export type Talent = {
  id: string
  Full_Name: string
  Email: string
  Status: "ACTIVE" | "INACTIVE"
  Skills: any
}
export type TalentResponse = {
  talent: {
    id: string
    Full_Name: string
    Email: string
    Status: "ACTIVE" | "INACTIVE"
    Skills: any
  }
  categories: {
    id: string
    name: string
  }
}

export const columns: ColumnDef<TalentResponse>[] = [
  {
    accessorKey: "talent",
    header: "Full Name",
    cell: ({ row }) => (
      <div className="capitalize">
        {(row.getValue("talent") as any).full_name}
      </div>
    ),
  },
  {
    accessorKey: "talent",
    header: "Email",
    cell: ({ row }) => (
      <div className="lowercase"> {(row.getValue("talent") as any).email}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("status") ? "ACTIVE" : "INACTIVE"}
      </div>
    ),
  },
  {
    accessorKey: "skills",
    header: "Skills",
    cell: ({ row }: any) => {
      return (
        <div>
          {}
          {JSON.parse(row.getValue("talent").skills)?.map((skill: any) => (
            <Badge className="mx-1" key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      )
    },
  },
]
