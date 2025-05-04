import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { loginUser, LoginResponse } from '../api/authApi'
import { useDispatch } from 'react-redux'
import { setToken } from '../slices/authSlice'

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const loginMutation = useMutation<LoginResponse, Error, LoginFormData>(
    userCredentials => loginUser(userCredentials),
    {
      onSuccess: ({ access_token }) => {
        dispatch(setToken(access_token));
        navigate('/invoices')
      }
    }
  )

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data)
  }

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1726137569914-ae2ad1c634f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')' }}
    >

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-300'
                  : 'border-gray-300 focus:ring-blue-300'
              }`}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              {...register('password')}
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 ${
                errors.password
                  ? 'border-red-500 focus:ring-red-300'
                  : 'border-gray-300 focus:ring-blue-300'
              }`}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
            &nbsp;
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
};


