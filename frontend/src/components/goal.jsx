"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function Goal({goal, goalId, done, callback}) {
  return (
    <div className="h-10 items-center flex space-x-2" onClick={() => callback(goalId)}>
      <Checkbox id={goalId} defaultChecked={done} className="w-10 h-10"/>
      <div className="text-center flex items-center leading-none">
        <label
          htmlFor={goalId}
          className="text-2xl font-medium leading-none items-center flex peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {goal}
        </label>
      </div>
    </div>
  )
}
