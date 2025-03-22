import Image from "next/image";
import Banner from '@/components/Banner';
import Card from '@/components/Card'
import styles from "./page.module.css";
import Link from "next/link";
import CardPanel from "@/components/CardPanel";
import { TravelCard } from "@/components/TravelCard";

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard></TravelCard>
    </main>
  );
}