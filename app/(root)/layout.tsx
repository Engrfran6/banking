import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { User } from "@/types";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const user: User = {
  firstName: 'Carol ',
  lastName: 'Henry',
  email: 'deulo@gmail.com',
  userId: "",
  $id: '',
  dwollaCustomerUrl: '',
  dwollaCustomerId: '',
  name: '',
  address1: '',
  city: '',
  state: '',
  postalCode:'',
  dateOfBirth:'',
  ssn:''
};


  return (
    <main className="flex h-screen w-full font-inter">
     <Sidebar user={user}/>

     <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image 
         src='/icons/logo.svg' 
         width={30} 
         height={30}
         alt="menu icon" 
        />

        <div>
          <MobileNavbar user={user}/>
        </div>
      </div>
         {children}
     </div>
    </main>
  );
}
