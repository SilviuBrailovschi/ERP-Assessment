export interface PaginationParams {
  page: number;
  limit: number;
}

export function getPagination(params: PaginationParams) {
  const { page = 1, limit = 10 } = params;

  return {
    skip: (page - 1) * limit,  // Offset
    take: limit,                // Limit per page
  };
}
