export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// ===============================================
//      Authentication management
// ===============================================

export const userLogin = apiBaseUrl + "/auth/login";
export const userLogout = "/auth/logout";
export const getUser = "/auth/get-user";
export const changePassword = "/auth/change-password";

// ==============================================
//      Role management
// ==============================================

export const getRolesList = "/auth/get-roles-list";
export const saveUpdateRole = "/auth/save-update-role";
export const getRoleById = (role: number) => `/auth/get-role-by-id/${role}`;
export const deleteRoleById = (id: number) => `/auth/delete-role/${id}`;


// =============================================
//      Permission management
// =============================================

export const getPermissionsList = "/auth/get-permissions-list";

// ============================================
//      user management
// ============================================

export const getUsersList = "/auth/get-users-list";
export const saveUpdateUser = "/auth/save-update-user";
export const getUserById = (id: number) => `/auth/get-user-by-id/${id}`;
export const deleteUserById = (id: number) => `/auth/delete-user/${id}`;