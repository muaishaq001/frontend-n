// API Service for backend integration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

interface ApiResponse<T = any> {
  success?: boolean;
  status?: string;
  message: string;
  data?: T;
  error?: string;
}

async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        status: data.status || 'error',
        message: data.message || 'An error occurred',
        error: data.error || data.message,
      };
    }

    return {
      success: true,
      status: data.status || 'success',
      message: data.message || 'Success',
      data: data.data || data,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 'error',
      message: error.message || 'Network error. Please check your connection.',
      error: error.message,
    };
  }
}

// Student Registration API
export const studentApi = {
  // Register student and get OTP
  register: async (data: {
    name: string;
    registrationNumber: string;
    email: string;
    department: string;
  }) => {
    return apiRequest<{ email: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Verify OTP and complete registration
  verify: async (data: {
    name: string;
    registrationNumber: string;
    email: string;
    department: string;
    otp: string;
  }) => {
    return apiRequest<{
      id: string;
      name: string;
      email: string;
      registrationNumber: string;
      department: string;
      isVerified: boolean;
    }>('/auth/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Resend OTP
  resendOtp: async (email: string) => {
    return apiRequest('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};

// Collaborator API
export const collaboratorApi = {
  // Submit collaboration application
  submit: async (data: {
    companyName: string;
    contactPerson: string;
    email: string;
    collaborationType: string;
  }) => {
    return apiRequest<{
      id: string;
      companyName: string;
      contactPerson: string;
      email: string;
      category: string;
      status: string;
      submittedAt: string;
    }>('/collaborators', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
