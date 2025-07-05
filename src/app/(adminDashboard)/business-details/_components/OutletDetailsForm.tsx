"use client"

import type React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
  outletName: z.string().min(2, {
    message: "Outlet name must be at least 2 characters.",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobileNumber: z
    .string()
    .min(10, {
      message: "Mobile number must be at least 10 digits.",
    })
    .regex(/^\d+$/, {
      message: "Mobile number must contain only digits.",
    }),
  businessAddress: z.string().min(10, {
    message: "Business address must be at least 10 characters.",
  }),
  categories: z.array(z.string()).min(1, {
    message: "Please select at least one category.",
  }),
})

type FormData = z.infer<typeof formSchema>

// Available categories matching the image
const availableCategories = [
  "Fast food",
  "Casual Dining",
  "Chinese",
  "Italian",
  "Indian",
  "Mexican",
  "Thai",
  "Japanese",
  "American",
  "Vegetarian",
  "Pizza",
  "Burger",
  "Coffee",
  "Bakery",
  "Seafood",
]

export function OutletDetailsForm() {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      outletName: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      businessAddress: "",
      categories: [],
    },
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const maxSize = 2 * 1024 * 1024 // 2MB

    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        toast.error("You can upload maximum 2 MB file.")
        return false
      }
      return file.type.startsWith("image/")
    })

    if (validFiles.length > 0) {
      setSelectedImages((prev) => [...prev, ...validFiles])
      // Create previews
      validFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImagePreviews((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const toggleCategory = (category: string) => {
    let newCategories: string[]
    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter((cat) => cat !== category)
    } else {
      newCategories = [...selectedCategories, category]
    }
    setSelectedCategories(newCategories)
    form.setValue("categories", newCategories)
  }

  function onSubmit(values: FormData) {
    console.log("Form submitted with values:", values)
    console.log("Selected images:", selectedImages)
    console.log("Selected categories:", selectedCategories)

    toast.success("Outlet details updated successfully!")

    // Reset form
    form.reset()
    setSelectedImages([])
    setImagePreviews([])
    setSelectedCategories([])
  }

  return (
    <Card className="w-full border-none">
      <CardContent className="py-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="outletName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Outlet Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your outlet name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Last Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email Address <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Mobile Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Enter your mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Outlet Images (Each image size max 2MB) <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-600">Click to upload outlet images</span>
                </label>
              </div>
              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview || "/placeholder.svg"}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-52 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Category Selection Section - Exact match to uploaded image */}
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Select Category <span className="text-red-500">*</span>
                  </FormLabel>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {availableCategories.map((category) => {
                      const isSelected = selectedCategories.includes(category)
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => toggleCategory(category)}
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            isSelected
                              ? "bg-[#FF3D00] text-white hover:bg-orange-600"
                              : " text-gray-700 border border-[#FF3D00] hover:bg-gray-200"
                          }`}
                        >
                          <span>{category}</span>
                          {isSelected && <span className="border bg-white rounded-full w-fit flex justify-center items-center size-4"><X className="h-3 w-3 " color="red" /> </span>}
                        </button>
                      )
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your business address" className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1 bg-[#FF3D00] hover:bg-orange-600 text-white">
                Update
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => {
                  form.reset()
                  setSelectedImages([])
                  setImagePreviews([])
                  setSelectedCategories([])
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
