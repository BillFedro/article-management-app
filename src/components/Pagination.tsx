'use client';

interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ page, totalPages, setPage }: Props) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="px-4 py-2 text-sm border rounded-md disabled:opacity-30"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-sm text-gray-700">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-4 py-2 text-sm border rounded-md disabled:opacity-30"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};


