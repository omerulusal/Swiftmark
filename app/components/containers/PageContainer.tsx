const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-3 md:px-10">
            {children}
        </div>
    )
}
// DetailClient'tan ve CartClient'tan children alır 

export default PageContainer