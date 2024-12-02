---
title: Contact Us | IDEACREW
layout: ../layouts/MainLayout.astro
---

# Contact Us

Get in touch with us for any inquiries or support.

## Contact Information

- Email: info@ideacrew.com
- Phone: (123) 456-7890
- Address: 123 Tech Street, Innovation City, ST 12345

## Send us a message

Please use the form below to send us a message:

<form class="space-y-4">
  <div>
    <label for="name" class="block mb-1">Name</label>
    <input type="text" id="name" name="name" class="w-full p-2 border rounded" required>
  </div>
  <div>
    <label for="email" class="block mb-1">Email</label>
    <input type="email" id="email" name="email" class="w-full p-2 border rounded" required>
  </div>
  <div>
    <label for="message" class="block mb-1">Message</label>
    <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea>
  </div>
  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
</form>
