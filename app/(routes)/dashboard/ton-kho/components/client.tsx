"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ProductColumn, columns } from "./columns";
import { Heading } from "@/components/dashboard/heading";
import { DataTable } from "@/components/ui/data-table";

interface ProductsClientProps {
  data: ProductColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Tồn Kho`}
          description="Manage inventory for your store"
        />
        <Button
          onClick={() => {
            router.push("/dashboard/san-pham/new");
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />

      <Separator />
    </>
  );
};
