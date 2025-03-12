"use client"
import { SortTitle, SortList } from "@/lib/constants"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { SortItem } from "@/type/global"
import { useSort } from "@/store"
export const Sort = () => {
  const { setValue } = useSort()
  const sortChangeEvent = (sort: SortItem) => {
    setValue(sort);
  }
  return (
    <div className="w-64 py-4">
      <p className="m-5 text-xl">{SortTitle}</p>
      <ToggleGroup className="flex-col gap-3" type="single" defaultValue="latest" onValueChange={sortChangeEvent}>
        {SortList.map(item => <ToggleGroupItem key={item.value} value={item.value}>{item.text}</ToggleGroupItem>)}
      </ToggleGroup>
    </div>
  )
}