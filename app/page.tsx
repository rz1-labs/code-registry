import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelloWorld as HelloWorldNewYork } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm as ExampleFormNewYork } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPageNewYork from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard as ExampleCardNewYork } from "@/registry/new-york/blocks/example-with-css/example-card";
import { HelloWorld as HelloWorldNeobrutalism } from "@/registry/neobrutalism/blocks/hello-world/hello-world";
import { ExampleForm as ExampleFormNeobrutalism } from "@/registry/neobrutalism/blocks/example-form/example-form";
import PokemonPageNeobrutalism from "@/registry/neobrutalism/blocks/complex-component/page";
import { ExampleCard as ExampleCardNeobrutalism } from "@/registry/neobrutalism/blocks/example-with-css/example-card";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          RZ1 Labs Code Registry
        </h1>
        <p className="text-muted-foreground">
          A registry for distributing code.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <Tabs defaultValue="new-york" className="w-full">
          <div className="sticky top-0 z-20 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur supports-backdrop-filter:bg-background/80 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Style Preview</p>
            <TabsList className="w-full sm:w-fit">
              <TabsTrigger value="new-york">New York</TabsTrigger>
              <TabsTrigger value="neobrutalism">Neobrutalism</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="new-york" className="space-y-8">
            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A simple hello world component
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <HelloWorldNewYork />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A contact form with Zod validation.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[400px] relative">
                <ExampleFormNewYork />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A complex component showing hooks, libs and components.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <PokemonPageNewYork />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A login form with a CSS file.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <ExampleCardNewYork />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="neobrutalism" className="space-y-8">
            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A simple hello world component
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <HelloWorldNeobrutalism />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A contact form with Zod validation.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[400px] relative">
                <ExampleFormNeobrutalism />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A complex component showing hooks, libs and components.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <PokemonPageNeobrutalism />
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
              <div className="flex items-center">
                <h2 className="text-sm text-muted-foreground sm:pl-3">
                  A login form with a CSS file.
                </h2>
              </div>
              <div className="flex items-center justify-center min-h-[300px] relative">
                <ExampleCardNeobrutalism />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
