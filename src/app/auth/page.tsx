"use client";

import { useState, Suspense } from "react";
import { signIn, signUp } from "@/lib/auth/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "@/components/shared/toast";
import { motion } from "motion/react";
import {
  Lock,
  AlertCircle,
  Loader2,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tracks = [
  "SOC Analyst",
  "VAPT",
  "Cloud Security",
  "DFIR",
  "Not sure yet",
];

const cities = [
  "Coimbatore",
  "Chennai",
  "Remote",
  "Other",
];

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"signin" | "signup">(
    searchParams.get("mode") === "signup" ? "signup" : "signin"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [studentType, setStudentType] = useState<"student" | "professional">("student");
  const [track, setTrack] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup") {
      if (password !== confirmPassword) {
        const errorMsg = "Passwords do not match";
        setError(errorMsg);
        toast.error("Validation failed", { description: errorMsg });
        return;
      }
      if (password.length < 8) {
        const errorMsg = "Password must be at least 8 characters long";
        setError(errorMsg);
        toast.error("Validation failed", { description: errorMsg });
        return;
      }
    }

    setIsLoading(true);

    try {
      if (mode === "signin") {
        await signIn.email({ email, password });
        toast.success("Signed in successfully!", { description: "Redirecting to dashboard..." });
      } else {
      await signUp.email({ email, password, name });

        // Save enrollment fields to DB
        try {
          await fetch("/api/enrollment-info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone,
              city,
              studentType,
              preferredTrack: track,
              collegeName: college,
              enrollmentMessage: message,
            }),
          });
        } catch {
          // Don't block signup if enrollment info fails
          console.error("Failed to save enrollment info");
        }

        toast.success("Account created successfully!", { description: "Welcome! Redirecting to dashboard..." });
      }
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : mode === "signin"
            ? "Failed to sign in"
            : "Failed to create account";
      setError(errorMessage);
      toast.error(mode === "signin" ? "Sign in failed" : "Sign up failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Sign In view
  if (mode === "signin") {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-black p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-1">
                Student <span className="text-red-500">Portal</span>
              </h1>
              <p className="text-gray-500 text-sm">
                Access your dashboard, assignments, and recordings
              </p>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={async () => {
                await signIn.social({
                  provider: "google",
                  callbackURL: "/dashboard",
                  fetchOptions: {
                    onError: (ctx) => {
                      toast.error("Sign in failed", { description: ctx.error.message });
                    }
                  }
                });
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#111] px-3 text-gray-500">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm transition-colors"
                />
              </div>

              {error && (
                <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-3 flex items-start gap-3">
                  <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                  <div className="text-sm text-red-300">{error}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <><Lock size={15} /> Sign In</>}
              </button>
            </form>

            <div className="mt-4 text-center">
              <a href="#" className="text-red-500 text-sm hover:text-red-400 transition-colors">Forgot password?</a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                Not a student yet?{" "}
                <button className="text-red-500 hover:text-red-400 font-semibold transition-colors" onClick={() => { setMode("signup"); setError(""); }}>
                  Enroll now
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Sign Up / Enroll view
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a0000_1px,transparent_1px),linear-gradient(to_bottom,#1a0000_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-500/30 rounded-full text-red-500 text-xs font-semibold uppercase tracking-widest mb-6">
              Enroll Now
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Begin Your <span className="text-red-500">Cybersecurity</span> Journey
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Fill in your details and we&apos;ll get you started on the path to becoming a cybersecurity professional.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form + Sidebar */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-24">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                </div>

                {/* Phone & City */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm font-medium">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-white text-sm font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full h-11 bg-[#0a0a0a] border border-white/10 text-sm rounded-lg px-3 text-white focus:border-red-500 focus:ring-0 focus:outline-none appearance-none"
                    >
                      <option value="" disabled className="text-gray-600">Select city</option>
                      {cities.map((c) => (
                        <option key={c} value={c} className="bg-[#0a0a0a] text-white">{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* I am a... */}
                <div className="space-y-2">
                  <Label className="text-white text-sm font-medium">I am a...</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setStudentType("student")}
                      className={cn(
                        "py-3 px-4 rounded-lg text-sm font-medium border transition-all",
                        studentType === "student"
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20"
                      )}
                    >
                      College Student
                    </button>
                    <button
                      type="button"
                      onClick={() => setStudentType("professional")}
                      className={cn(
                        "py-3 px-4 rounded-lg text-sm font-medium border transition-all",
                        studentType === "professional"
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20"
                      )}
                    >
                      Working Professional
                    </button>
                  </div>
                </div>

                {/* Track */}
                <div className="space-y-2">
                  <Label htmlFor="track" className="text-white text-sm font-medium">
                    Preferred Track <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="track"
                    required
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full h-11 bg-[#0a0a0a] border border-white/10 text-sm rounded-lg px-3 text-white focus:border-red-500 focus:ring-0 focus:outline-none appearance-none"
                  >
                    <option value="" disabled className="text-gray-600">Select track</option>
                    {tracks.map((t) => (
                      <option key={t} value={t} className="bg-[#0a0a0a] text-white">{t}</option>
                    ))}
                  </select>
                </div>

                {/* College (conditional) */}
                {studentType === "student" && (
                  <div className="space-y-2">
                    <Label htmlFor="college" className="text-white text-sm font-medium">College Name</Label>
                    <Input
                      id="college"
                      type="text"
                      placeholder="Your college name"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                )}

                {/* Password fields */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white text-sm font-medium">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      required
                      placeholder="Min 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-white text-sm font-medium">
                      Confirm Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="signup-confirm-password"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 rounded-lg h-11 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white text-sm font-medium">Message (Optional)</Label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 focus:ring-0 focus:outline-none rounded-lg px-3 py-3 text-sm resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-3 flex items-start gap-3">
                    <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                    <div className="text-sm text-red-300">{error}</div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : "Submit Enrollment Request"}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  We&apos;ll respond within 24 hours · No spam, ever
                </p>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Limited Slots Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-white mb-2">Limited Slots Per Cohort</h3>
              <p className="text-gray-500 text-sm mb-5">
                We keep batch sizes small to ensure personalized attention and quality mentorship.
              </p>
              <ul className="space-y-3">
                {[
                  "Personal mentor assigned",
                  "Buddy system for peer learning",
                  "1:1 career counseling",
                  "Small batch size (max 30)",
                  "Dedicated placement support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={15} className="text-red-500 shrink-0" />
                  Coimbatore & Chennai
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail size={15} className="text-red-500 shrink-0" />
                  hello@zharnyx.com
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={15} className="text-red-500 shrink-0" />
                  +91 98765 43210
                </div>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.123 1.52 5.86L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.97 0-3.867-.53-5.52-1.53l-.396-.234-3.76.98.998-3.648-.258-.41A9.795 9.795 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Already have account */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Already have an account?{" "}
                <button
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                  onClick={() => { setMode("signin"); setError(""); }}
                >
                  Sign in
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <Loader2 className="animate-spin text-red-600" size={32} />
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
