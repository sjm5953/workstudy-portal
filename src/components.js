async function loadComponent(targetId, filePath, callback) {
  const target = document.getElementById(targetId);
  

  if (!target) {
    console.error(`No element found with id: ${targetId}`);
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Could not load ${filePath}`);
    }

    const html = await response.text();
    target.innerHTML = html;

    if (callback) {
      callback();
    }
  } catch (error) {
    console.error(error);
    target.innerHTML = `
      <div class="p-4 text-error text-sm font-bold uppercase">
        Failed to load component.
      </div>
    `;
  }
}