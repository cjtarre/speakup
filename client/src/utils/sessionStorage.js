const SESSION_KEY = "speakup_sessions";

export function getSessions() {
  const savedSessions = localStorage.getItem(SESSION_KEY);
  if (!savedSessions) return []; return JSON.parse(savedSessions);
}

export function saveSession(session) {
  const sessions = getSessions();
  const newSession = {id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...session,};

  localStorage.setItem(SESSION_KEY, JSON.stringify([newSession, ...sessions]));
  return newSession;
}

export function deleteSession(sessionId) {
  const sessions = getSessions();
  const updatedSessions = sessions.filter((session) => session.id !== sessionId);
  localStorage.setItem(SESSION_KEY, JSON.stringify(updatedSessions));
}

export function clearSessions() {localStorage.removeItem(SESSION_KEY);}