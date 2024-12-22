"use client";
import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send,
  MessageCircle
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: <Facebook className="w-6 h-6" />,
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com",
    icon: <Twitter className="w-6 h-6" />,
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: <Instagram className="w-6 h-6" />,
    color: "hover:text-pink-600"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    icon: <Linkedin className="w-6 h-6" />,
    color: "hover:text-blue-700"
  }
];

const Feedback = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log("Submitted comment:", comment);
      setComment("");
    }
  };

  return (
    <div className="w-full lg:w-3/4 m-auto my-8">
      {/* Social Media Section */}
      <div className="space-y-4 my-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-800">Connect With Us</h2>
        </div>
        <div className="flex gap-6 items-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="flex-1 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!comment.trim()}
            >
              <Send className="w-4 h-4" />
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;