import { KartContextProvider } from "@/hooks/useCart"

const KartProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <KartContextProvider>{children}</KartContextProvider>
    )
}

export default KartProvider
/**
 * Context'i layoutta saramlayacağımdan children ekledim.
 */