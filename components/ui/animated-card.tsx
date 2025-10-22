"use client";
import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import { FileText } from "lucide-react";
import { iconMap } from "@/lib/constants";

interface AnimatedCardProps {
  title: string;
  description: string;
  link?: string;
  iconColor?: string;
}

const AnimatedCard = ({
  title,
  description,
  link,
  iconColor = "currentColor",
}: AnimatedCardProps) => {
  const Icon = iconMap[title as keyof typeof iconMap] || iconMap.default;

  const CardContent = (
    <Card className="p-6 h-full hover:shadow-xl transition-all hover:bg-primary group hover:text-primary-foreground hover:translate-y-[-10px] flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 relative mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
          <Icon
            stroke={iconColor}
            className="w-full h-full group-hover:text-primary-foreground transition-all duration-300 ease-in-out group-hover:rotate-12"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 group-hover:text-primary-foreground">
          {description}
        </p>
      </div>
      {link && (
        <div className="flex justify-end">
          <Button
            variant="link"
            className="group-hover:text-primary-foreground group-hover:translate-x-2 transition-transform duration-300 float-end"
          >
            Learn More →
          </Button>
        </div>
      )}
    </Card>
  );

  return link ? <Link href={link}>{CardContent}</Link> : CardContent;
};

export default AnimatedCard;
