"use server"

interface handleCreateUserProps {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export const handleCreateUser = async (formData: handleCreateUserProps) => {
  console.log("formData:", formData)
}