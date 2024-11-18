import { signify } from "react-signify";
export const sEvent = signify({
  basicInfo: {
    evetntLogo: "",
    eventBackground: "",
    eventName: "",
    isOffline: true,
    eventLocation: "",
    province: "",
    district: "",
    ward: "",
    street: "",
    eventType: "",
    eventInfo: "",
    orgLogo: "",
    orgName: "",
    orgInfo: "",
  },
  performances: [sPerformance],

  // Phương thức để thêm suất diễn mới
  addPerformance: (sPerformance) => {
    sEvent.update((state) => ({
      ...state,
      performances: [...state.performances, sPerformance],
    }));
  },
  // Phương thức để cập nhật thông tin vé
  updateTicket: (performanceId, ticketId, updatedTicket) => {
    sEvent.update((state) => ({
      ...state,
      performances: state.performances.map((perf) => {
        if (perf.id === performanceId) {
          return {
            ...perf,
            tickets: perf.tickets.map((ticket) =>
              ticket.id === ticketId ? { ...ticket, ...updatedTicket } : ticket
            ),
          };
        }
        return perf;
      }),
    }));
  },

  // Phương thức để xóa một suất diễn
  removePerformance: (performanceId) => {
    sEvent.update((state) => ({
      ...state,
      performances: state.performances.filter(
        (perf) => perf.id !== performanceId
      ),
    }));
  },
});
const sTicket = {
  name: "",
  price: "",
  total: 0,
  startTime: "",
  endTime: "",
  info: "",
  img: "",
};
const sPerformance = {
  startTime: "",
  endTiem: "",
  tikets: [sTicket],
};
