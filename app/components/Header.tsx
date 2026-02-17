"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronsDownUpIcon, Search, User } from "lucide-react";
import { categories } from "@/data";
const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  return (
    <header className="max-padd-container">
      <div className="bg-secondary px-5 py-2 mt-2 w-full z-50 rounded-full"> 
        <div className="flexBetween gap-4">
          {/* logo */}

          <div className="flex-1 flex gap-3 ">
            <Link href="/">
            <span className="text-3xl font-bold relative bottom-1 tracking-wide">
                ShopEl
              <span className="text-destructive ">0</span>
            </span>
              
            </Link>
          </div>

          {/* searchbar */}
          <div className="flex-2 lg:flex-1 relative hidden md:flex items-center"> 
            <div className="flex bg-wight w-full max-w-[566px] pl-6 ring-1 ring-slate-900/5 rounded-full overflow-hidden items-center">
              <input className="w-full text-sm outline-none pr-10 placeholder:text-gray-400" type="text" placeholder="Type to search..." />

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="flexCenter gap-1 px-2 border-x-2 border-slate-900/10 cursor-pointer font-semibold text-sm text-gray-500 outline-none">
                  <Button variant="outline" className="flex items-center gap-2">
                    {selectedCategory || "Categories"}
                    <ChevronsDownUpIcon strokeWidth={2.25} size={19} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                    
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category.id}
                        onSelect={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                      Profile
                      
                    </DropdownMenuItem>
                   
                  </DropdownMenuGroup>
                  
                  
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="p-3 cursor-pointer ">
                <Search strokeWidth={2.5}/>
              </div>
            </div>
          </div>
            {/* cart & user*/}

            <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
                
                <div className="ring-1 ring-slate-900 px-3 text-lg font-bold rounded-full relative cursor-pointer">
                    Cart
                    <span className="bg-primary text-white text-[12px] font-semibold absolute -top-3.5  -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
                        0
                    </span>
                </div>



                <div className="group">
                    <Button size={"lg"} className="rounded-full cursor-pointer">

                        <User/>
                        Login
                    </Button>

                </div>
            
            </div>
            {/*User */}

         
          
        </div>
      </div>
    </header>
  );
};

export default Header;
