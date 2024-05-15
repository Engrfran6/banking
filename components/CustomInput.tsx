
import { customFormIputProps } from "@/types"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"


const CustomInput = ({control, name, label, placeholder }:customFormIputProps) => {

  return (
     <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === 'password'? 'password': "text"}
                {...field}
                />
            </FormControl>
            </div>
            <FormMessage className="form-message mt-2"/>
        </div>
        )}
      />
  )
}
export default CustomInput