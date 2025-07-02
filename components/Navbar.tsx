import Link from "next/link"


const navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container relative z-30 padding-container py-5">
        <Link href="/" className="text-2xl font-bold text-gray-800">
        </Link>

    </nav>
  )
}

export default navbar
