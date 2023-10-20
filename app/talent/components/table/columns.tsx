
import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"

export type Talent = {
    id: string
    Full_Name: string
    Email: string
    Status: "ACTIVE" | "INACTIVE" 
  }
   

export const columns: ColumnDef<Talent>[] = [
    {
      accessorKey: "full_name",
      header: "Full Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("full_name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")? "ACTIVE": "INACTIVE"}</div>
      ),
    },
    {
      accessorKey: "skills",
      header: "Skills",
      cell: ({ row }: any) => {
        console.log(row.getValue("skills"))
        
        return(
        <div >
          {row.getValue("skills").map((skill: any) => (<Badge className="mx-1" key={skill.name} variant="outline">{skill.name}</Badge>))}
          </div>
      )},
    },
    
  ]
   