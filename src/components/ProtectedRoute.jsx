import { useAuth } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        
        return (
            <div className="flex justify-center items-center h-screen text-emerald-600 text-xl">
                Cargando la sesión...
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute