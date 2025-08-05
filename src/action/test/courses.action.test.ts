// import { describe, expect, it, vi } from "vitest";

// import useCoursesStore from "~/stores/course.store";
// import { fetchAllCourses, getCourseData } from "../courses.action";
// import { Course } from "../services.type";

// describe("getCourseData", () => {
//   const mockCourses = [
//     {
//       slug1: { name: "Course 1", description: "Description 1" },
//     },
//     {
//       slug2: { name: "Course 2", description: "Description 2" },
//     },
//   ];

//   beforeEach(() => {
//     // Clear any previous mock fetch calls
//     vi.resetAllMocks();
//   });

//   it("should fetch course data by slug", async () => {
//     // Mock successful fetch response
//     vi.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: true,
//       json: async () => mockCourses,
//     } as Response);

//     const slug = "slug1";
//     const courseData = await getCourseData(slug);

//     expect(courseData).toEqual(mockCourses[0][slug]);
//     expect(global.fetch).toHaveBeenCalledWith(
//       `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/courses.json`,
//       { cache: "no-store" },
//     );
//   });

//   it("should throw an error if the course is not found", async () => {
//     vi.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: true,
//       json: async () => mockCourses,
//     } as Response);

//     const slug = "slug3"; // This slug does not exist
//     await expect(getCourseData(slug)).rejects.toThrow("Course not found");
//   });

//   it("should throw an error if fetch fails", async () => {
//     // Mock fetch failure
//     vi.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: false,
//     } as Response);

//     const slug = "slug1";
//     await expect(getCourseData(slug)).rejects.toThrow("Failed to fetch data");
//   });
// });

// describe("fetchAllCourses", () => {
//   const mockCourses: Course[] = [
//     {
//       id: `1`,
//       title: "Course 1",
//       description: "Description 1",
//       about: "",
//       imageUrl: "",
//       duration: 0,
//       startDate: "",
//       fee: 0,
//       classes: {
//         online: [],
//         weekend: [],
//         weekday: [],
//       },
//     },
//     {
//       id: `2`,
//       title: "Course 2",
//       description: "Description 2",
//       about: "",
//       imageUrl: "",
//       duration: 0,
//       startDate: "",
//       fee: 0,
//       classes: {
//         online: [],
//         weekend: [],
//         weekday: [],
//       },
//     },
//   ];

//   beforeEach(() => {
//     vi.resetAllMocks();
//   });

//   it("should fetch all courses and update the store", async () => {
//     const setCourses = vi.fn();
//     const setLoading = vi.fn();
//     const setError = vi.fn();

//     vi.spyOn(useCoursesStore, "getState").mockReturnValue({
//       setCourses,
//       setLoading,
//       setError,
//       allCourses: [],
//       loading: false,
//       error: null,
//       activeCourse: null,
//       setActiveCourse: vi.fn(),
//     });

//     // Mock response with correct structure
//     vi.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: true,
//       json: async () => ({
//         data: {
//           items: mockCourses,
//         },
//       }),
//     } as Response);

//     await fetchAllCourses();

//     // Verify call order and arguments
//     expect(setLoading).toHaveBeenNthCalledWith(1, true);
//     expect(setError).toHaveBeenCalledWith(null);
//     expect(setCourses).toHaveBeenCalledWith(mockCourses);
//     expect(setLoading).toHaveBeenNthCalledWith(2, false);
//   });

//   it("should handle fetch errors and set error in the store", async () => {
//     const setLoading = vi.fn();
//     const setError = vi.fn();
//     const setCourses = vi.fn();

//     // Mock Zustand's useCoursesStore
//     vi.spyOn(useCoursesStore, "getState").mockReturnValue({
//       setCourses,
//       setLoading,
//       setError,
//       allCourses: [],
//       loading: false,
//       error: null,
//       activeCourse: null,
//       setActiveCourse: function (course: Course): void {
//         throw new Error("Function not implemented.");
//       },
//     });

//     // Mock fetch failure
//     vi.spyOn(global, "fetch").mockResolvedValueOnce({
//       ok: false,
//       statusText: "Not Found",
//     } as Response);

//     await fetchAllCourses();

//     expect(setError).toHaveBeenCalledWith("Error: Not Found");
//     expect(setLoading).toHaveBeenCalledWith(false);
//   });
// });

// describe("setActiveCourse", () => {
//   it("should set the active course in the store", () => {
//     const setActiveCourseMock = vi.fn();

//     // Mock Zustand's useCoursesStore
//     vi.spyOn(useCoursesStore, "getState").mockReturnValue({
//       setActiveCourse: setActiveCourseMock,
//       allCourses: [],
//       loading: false,
//       error: null,
//       activeCourse: null,
//       setCourses: function (courses: Course[]): void {
//         throw new Error("Function not implemented.");
//       },
//       setLoading: function (loading: boolean): void {
//         throw new Error("Function not implemented.");
//       },
//       setError: function (error: string | null): void {
//         throw new Error("Function not implemented.");
//       },
//     });
//   });
// });
export {};
