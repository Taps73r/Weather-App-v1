import { CityInput } from "@/components/CityInput";
import { ForecastDays } from "@/components/ForecastDays";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
    return (
        <div>
            <ThemeSwitcher />
            <CityInput />
            <ForecastDays />
        </div>
    );
}
