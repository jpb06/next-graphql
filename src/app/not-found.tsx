import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

const NotFound = async () => (
  <div className="flex flex-col items-center text-center">
    <FileQuestion className="h-44 w-44 text-white" />
    <h2 className="text-2xl text-white">Not Found</h2>
    <p className="mt-10">Could not find requested resource</p>
    <Link className="text-white underline" href="/">
      Return Home
    </Link>
  </div>
);
export default NotFound;
