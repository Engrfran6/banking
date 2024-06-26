import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className=" border border-gray-900 ">
          <Image src="/icons/auth-image.png" alt="auth image" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
