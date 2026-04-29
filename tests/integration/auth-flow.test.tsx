// @vitest-environment jsdom

import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm, {
  createSession,
} from "../../src/components/auth/SignupForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/signup",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

describe("auth flow", () => {
  it("Submits signup form and creates a session", async () => {
    render(<SignupForm />);

    await userEvent.type(screen.getByLabelText(/Email/i), "johndoe@gmail.com");
    await userEvent.type(screen.getByLabelText(/Password/i), "Password123");

    // Spy on the form's submit event
    const form = screen.getByRole("form");
    const submitSpy = vi.fn();
    form.addEventListener("submit", submitSpy);

    const submitBtn = screen.getByRole("button", { name: /Create Account/i });

    await userEvent.click(submitBtn);

    expect(submitSpy).toHaveBeenCalledOnce();
    expect(createSession("ab123g", "test@gmail.com")).toBe(true);
  });
});
