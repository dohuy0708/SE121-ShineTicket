// src/services/apiService.js

const API_BASE_URL = "https://provinces.open-api.vn/api";

/**
 * Fetch danh sách tỉnh/thành.
 * @returns {Promise<Array>} Danh sách tỉnh/thành.
 */
export const fetchProvinces = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/p/`);
    if (!response.ok) {
      throw new Error("Failed to fetch provinces");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error;
  }
};

/**
 * Fetch danh sách quận/huyện theo mã tỉnh/thành.
 * @param {string} provinceCode Mã tỉnh/thành.
 * @returns {Promise<Array>} Danh sách quận/huyện.
 */
export const fetchDistricts = async (provinceCode) => {
  try {
    const response = await fetch(`${API_BASE_URL}/p/${provinceCode}?depth=2`);
    if (!response.ok) {
      throw new Error("Failed to fetch districts");
    }
    const data = await response.json();
    return data.districts;
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};

/**
 * Fetch danh sách phường/xã theo mã quận/huyện.
 * @param {string} districtCode Mã quận/huyện.
 * @returns {Promise<Array>} Danh sách phường/xã.
 */
export const fetchWards = async (districtCode) => {
  try {
    const response = await fetch(`${API_BASE_URL}/d/${districtCode}?depth=2`);
    if (!response.ok) {
      throw new Error("Failed to fetch wards");
    }
    const data = await response.json();
    return data.wards;
  } catch (error) {
    console.error("Error fetching wards:", error);
    throw error;
  }
};
