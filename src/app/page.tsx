import { SettingsTabs } from './components/SettingsTabs'
import * as Input from './components/Form/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from './components/Form/FileInput/index'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { Textarea } from './components/Form/Textarea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="flex flex-col space-y-6 mt-8">
        <div className="flex justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="font-medium text-lg">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="submit" variant='ouline'>Canel</Button>
            <Button type="submit" form="settings" variant='primary'>Save</Button>
          </div>
        </div>
        <form action="" id="settings" className="flex w-full flex-col gap-5 divide-y divde-zinc-200">
          <div className="grid gap-8 grid-cols-form">
            <label htmlFor="settings" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Guilherme" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Maciel" />
              </Input.Root>
            </div>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" />
            </Input.Root>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Your photo <span className="text-sm mt-0.5 text-zinc-500 font-normal block">This will be displayed on your profile</span></label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="settings" className="text-sm font-medium text-zinc-700">Role</label>
            <Input.Root>
              <Input.Control id="role" />
            </Input.Root>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <Select placeholder="Select a country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="Chile" value="ch" />
              <SelectItem text="Argentina" value="Ag" />
            </Select>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="timeZone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <Select placeholder="Select a timezone...">
              <SelectItem text="Standerd UT -3" value="ut-3" />
            </Select>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">Bio<span className="text-sm mt-0.5 text-zinc-500 font-normal block">Write a short introduction.</span></label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem defaultChecked text="Normal Text" value="normal" />
                </Select>
                <div className="flex items-center gap-1">
                  <button type="button" className="px-2 hover:bg-zinc-50 rounded-md">
                    <Bold className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button type="button" className="px-2 hover:bg-zinc-50 rounded-md">
                    <Italic className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button type="button" className="px-2 hover:bg-zinc-50 rounded-md">
                    <Link className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button type="button" className="px-2 hover:bg-zinc-50 rounded-md">
                    <List className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button type="button" className="px-2 hover:bg-zinc-50 rounded-md">
                    <ListOrdered className="h-4 w-4 text-zinc-500" />
                  </button>
                </div>
              </div>
              <Textarea />
            </div>
          </div>
          <div className="grid gap-8 grid-cols-form pt-5">
            <label htmlFor="portfolioProjects" className="text-sm font-medium text-zinc-700">Portfolio Projects<span className="text-sm mt-0.5 text-zinc-500 font-normal block">Share a few snippets of your work.</span></label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="submit" variant='ouline'>Canel</Button>
            <Button type="submit" form="settings" variant='primary'>Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
